import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, Heart, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEvent } from "@/hooks/use-events"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id, 10)
  const { event: productData, loading, error, usingFallback } = useEvent(productId)

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">공연 정보를 불러오는 중...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!productData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">공연을 찾을 수 없습니다</h1>
            <p className="text-gray-600 mb-8">요청하신 공연 정보가 존재하지 않습니다.</p>
            <Link href="/">
              <Button>홈으로 돌아가기</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // 날짜 포맷팅 함수
  const formatPeriod = (startDate: string, endDate: string) => {
    const start = new Date(startDate).toLocaleDateString("ko-KR")
    const end = new Date(endDate).toLocaleDateString("ko-KR")
    return `${start} ~ ${end}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* API 상태 알림 */}
      {usingFallback && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm">⚠️ {error} 현재 샘플 데이터를 표시하고 있습니다.</p>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              홈
            </Link>
            <span>›</span>
            <Link href={`/contents/genre/${productData.category.toLowerCase()}`} className="hover:text-gray-900">
              {productData.category}
            </Link>
            <span>›</span>
            <span className="text-gray-900">{productData.title}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <Image
                  src={productData.poster || "/placeholder.svg"}
                  alt={productData.title}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(productData.gallery || []).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded cursor-pointer">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`갤러리 ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Product Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    {productData.category}
                  </Badge>
                  {productData.category === "뮤지컬" && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      대형뮤지컬
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{productData.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{productData.subtitle}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{productData.rating || 0}</span>
                    <span className="text-gray-600">({productData.reviewCount || 0})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4 mr-1" />
                      찜하기
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      공유하기
                    </Button>
                  </div>
                </div>
              </div>

              {/* Performance Info */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">공연 정보</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">공연장소</span>
                      <p className="font-medium">{productData.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">공연기간</span>
                      <p className="font-medium">{formatPeriod(productData.startDate, productData.endDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">공연시간</span>
                      <p className="font-medium">{productData.runtime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">관람연령</span>
                      <p className="font-medium">{productData.ageLimit}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Cast Info */}
              {productData.cast && productData.cast.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">캐스팅</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {productData.cast.map((actor, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 overflow-hidden rounded-full">
                          <Image
                            src={actor.image || "/placeholder.svg"}
                            alt={actor.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-medium text-sm">{actor.name}</p>
                        <p className="text-xs text-gray-600">{actor.role}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">예매하기</h3>

                {/* Price Info */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">가격 정보</h4>
                  <div className="space-y-2">
                    {productData.price.vip && (
                      <div className="flex justify-between">
                        <span>VIP석</span>
                        <span className="font-semibold">{productData.price.vip}</span>
                      </div>
                    )}
                    {productData.price.r && (
                      <div className="flex justify-between">
                        <span>R석</span>
                        <span className="font-semibold">{productData.price.r}</span>
                      </div>
                    )}
                    {productData.price.s && (
                      <div className="flex justify-between">
                        <span>S석</span>
                        <span className="font-semibold">{productData.price.s}</span>
                      </div>
                    )}
                    {productData.price.a && (
                      <div className="flex justify-between">
                        <span>A석</span>
                        <span className="font-semibold">{productData.price.a}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Schedule */}
                {productData.schedule && productData.schedule.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">공연 일정</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {productData.schedule.map((day, index) => (
                        <div key={index} className="border rounded p-3">
                          <p className="font-medium text-sm mb-1">{day.date}</p>
                          <div className="flex gap-2">
                            {day.times.map((time, timeIndex) => (
                              <Button key={timeIndex} variant="outline" size="sm" className="text-xs">
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link href={`/booking/${productData.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                    예매하기
                  </Button>
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">예매 수수료 별도</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">상세정보</TabsTrigger>
              <TabsTrigger value="venue">공연장정보</TabsTrigger>
              <TabsTrigger value="reviews">관람후기</TabsTrigger>
              <TabsTrigger value="qna">Q&A</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">공연 상세정보</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{productData.description}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    화려한 무대와 의상, 그리고 아름다운 음악이 어우러져 관객들에게 잊을 수 없는 감동을 선사합니다. 전
                    세계적으로 사랑받는 이 작품을 한국 최고의 배우들이 선보입니다.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="venue" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">공연장 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{productData.venue}</h4>
                    <p className="text-gray-700 mb-4">서울특별시 송파구 올림픽로 240</p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">지하철:</span> 2호선 잠실새내역 4번 출구
                      </p>
                      <p>
                        <span className="font-medium">버스:</span> 잠실새내역 정류장
                      </p>
                      <p>
                        <span className="font-medium">주차:</span> 공연장 주차장 이용
                      </p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">지도 영역</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">관람후기</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">user***</span>
                        <span className="text-sm text-gray-400">2024.06.10</span>
                      </div>
                      <p className="text-gray-700">
                        정말 감동적인 공연이었습니다. 배우들의 연기와 노래가 훌륭했고, 무대 연출도 화려해서 눈을 뗄 수
                        없었어요. 강력 추천합니다!
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="qna" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Q&A</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <p className="font-medium mb-2">Q. 공연 중 사진 촬영이 가능한가요?</p>
                    <p className="text-gray-700">
                      A. 공연 중 사진 및 동영상 촬영은 금지되어 있습니다. 공연 시작 전 로비에서만 촬영 가능합니다.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <p className="font-medium mb-2">Q. 어린이도 관람 가능한가요?</p>
                    <p className="text-gray-700">
                      A. {productData.ageLimit} 관람 가능하며, 미취학 아동은 입장이 제한될 수 있습니다.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
