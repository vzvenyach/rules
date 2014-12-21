A RESOLUTION

____

IN THE COUNCIL OF THE DISTRICT OF COLUMBIA

____

To appoint the Chairperson Pro Tempore and chairpersons and members of each standing committee of the Council of the District of Columbia during Council Period 21. 

RESOLVED, BY THE COUNCIL OF THE DISTRICT OF COLUMBIA, That this resolution may be cited as the “Council Period 21 Appointment of Chairperson Pro Tempore, Committee Chairpersons, and Committee Membership Resolution of 2015”.

Sec. 2. Pursuant to section 212 of the Rules of Organization and Procedure for the Council of the District of Columbia, Council Period 21, effective January 2, 2015 (Res. 21-1; ___ DCR ___) ("Rules"), the Council appoints Kenyan McDuffie as Chairperson Pro Tempore.

Sec. 3. Pursuant to section 221 of the Rules, the Council appoints the following committee chairpersons and members:
{% for c in committees %}({{loop.index}}) The chairperson of the {{c.name}}, established by section {{c.rule}} of the Rules, shall be {{c.chair}}, and its members shall be {% for member in c.members %}{% if not loop.last %}{{member}}, {% else %}and {{member}}{% endif %}{% endfor %}.
{% endfor %}

Sec. 4. This resolution shall take effect immediately.