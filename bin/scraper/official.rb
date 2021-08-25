#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  class Member
    def name
      noko.parent.css('.president-title').text.tidy
    end

    def position
      noko.parent.css('.president-time-line').text.tidy
    end
  end

  class Members
    def member_container
      noko.css('#presidential-cabinet .president-title')
    end
  end
end

file = Pathname.new 'html/official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
