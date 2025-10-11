

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoHandRightOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M432,320V144a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M368,256V80a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M240,241V96a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V320" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M304,240V48a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M432,320c0,117.4-64,176-152,176s-123.71-39.6-144-88L83.33,264c-6.66-18.05-3.64-34.79,11.87-43.6h0c15.52-8.82,35.91-4.28,44.31,11.68L176,320" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

